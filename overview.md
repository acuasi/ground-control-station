# Overview of the system

## Hardware and software

### Humans
Joking aside, it's important to start with how _people_ interface with a GCS system for UAVs.  The purpose of a GCS is to allow people to control UAVs safely to complete missions.

People's roles in a GCS fall broadly into three categories:

 * *Vehicle operators* are responsible for the current status, position, and health of the UAV in order to conduct a mission safely.  This means being able to know where a UAV is, if it's OK to fly and if there are operational hazards/concerns that need attention (is it flying into a power line? etc).  Vehicle operators may be in direct manual control of a UAV if required.
 * *Mission operators* are responsible for the successful outcome of a mission within operational parameters.  This means coordinating what the vehicle operator is doing with the overall goals (is the UAV doing what it's supposed to?  Is the VO operating the craft correctly?), being aware of airspace and safety constraints (do folks know that the craft is coming in for a landing?  should we abort the mission because the winds are too strong?), and coordinating with other people as required to execute the mission successfully.
 * *Observers* coordinate with the MO and VO to report line-of-sight safety concerns and help coordinate folks on the ground.  They may also observe realtime data from the mission in coordination with the MO in order to help ensure that the mission is going OK.

This GCS system needs to support each of these roles.  Never forget that even though this technology is 'unmanned,' it's always all about people, in terms of safety and the operational objectives of using the technology.

### The UAV
The main hardware components are the UAV itself, and its "components," or payload(s).  The UAV's hardware consists of its autopilot (ArduPilot, PX4, or similar), radio to the GCS, and avionics (wings, rotors, motors, sensors).  Components may be payloads or other elements that have an 'identity' according to the software.

Software on the UAV consists of ArduPilot Mega (APM), which is the firmware that runs the control system for the UAV, as well as any components that can have an 'identity'.  More on that, below.

### The ground control system (GCS)
The hardware of the GCS consists of a few pieces: the computer running the ground station server, any computers that are connected to the GCS server, a GPS unit that is reporting the location of the GCS, an ad-hoc local area wifi network, and a wireless radio that talks to the UAV.

Software on the GCS consists of the main GCS server code; the client code that runs on web browsers that connect other devices (laptops, phones) to the GCS server, and 3rd-party open-source software that run on the GPS/ad-hoc wifi, etc.

## MAVLink
MAVLink is the protocol used to talk between the GCS server and the autopilot.  In this case, the protocol is an agreed-upon way of formatting binary data streams so that both the GCS and the autopilot can encode and decode messages which command the craft to do something and/or inform the GCS of the status of the craft.

The idea of the protocol is to make it possible for ideas such as "take off", "fly to this point in space," "loiter here," or "take a picture now" to be communicated to the UAV.  Conversely, status updates like "I'm here," "my battery is low," "the wind is strong" to be sent back to the GCS so that the mission operator can determine how to proceed.

A protocol is an abstraction that is at a 'higher' level than any particular implementation: it's the same way that we can express the same ideas in many human languages, but with different words.  This means that MAVLink is defined in terms of XML, and is *compiled* into specific implementations in several different languages (python, C++, Javascript).

This project has implemented the first Javascript implementation of the MAVLink protocol.

## Node.js, HTML5, and realtime web apps
Other GCS systems written in python and C++ exist.  Why is a new approach worth the time?  There's two main reasons:

 1. Other GCS systems either come from a pilot-centric or hobbyist-centric perspective.  That's great, but our goal is to put civilian applications -- science, search-and-rescue -- first.  We want *apps on drones*.
 2. Realtime web-based applications are a proven technology that let lots of people participate on lots of different devices (laptops, phones, tablets) just by using a web browser.  It leverages technology that many people already have in their pockets and already use every day.

Javascript is a mature language that has been used in web browsers forever (more or less), and it's a key language that makes the web work.  Node.js is a way to run Javascript on a server, instead of a browser, able to connect to many clients at the same time and facilitate realtime communications between them.  HTML5 is a broad term that refers to the use of modern web technologies that support realtime communications, rich user interfaces and data exhanges, and fast, beautiful user interfaces.

This GCS uses Node.js as a hub to connect the UAV with a user interface, implemented in Javascript/HTML5, that can be run on many devices in realtime simultaneously.

### Some nitty, some gritty
Besides the broad architecture of MAVLink + Node.js + HTML5, there's some concepts we strongly believe in that form the core of this project.

 * *Open source*.  Open source software is software where you have access to the source code, so you can change or modify the software if you want to.  In our opinion, this is the same thing as owning the house you live in: you want to paint the walls?  You do it.  You want to rip out a wall?  You can do that.  Rewire the outlets?  Go for it.  New deck?  Yours to build.  Maybe more important than that, though, is that it's actually like *owning your own city.*  In this project, we're leveraging dozens of open-source technologies, individually powerful but inimitable when combined.  By choosing open-source libraries, frameworks and protocols, we're avoiding reinventing technologies that already work.  If we need to modify them to suit our goals, we can.
 * *Software reuse*.  Very much in line with open-source software is the idea of reusing other software wherever possible.  This means aggressively learning and using frameworks and libraries that may be intimidating at first, but which provide value and keep us from reinventing the wheel.
 * *Test/behavior-driven development*.  This means that we spend a lot of our time writing *tests* before writing *code that makes the tests pass*.  In our opinion, this isn't exactly a holy grail: it's a kind of give-and-take, sometimes hacking code into place that proves a concept or makes something cool happen, but then taking the time to write some decent tests so that we know our code functions the way we expect it to and gives us a way to test regressions as we develop.  In our experience, TDD/BDD is the fastest way to figure out what you really mean to write, and to make sure it stays that way.
 * *Continuous integration*.  Continuous integration is an automated process of running your tests, packaging/compressing your software and packaging it for release to clients.  Anything worth doing often, is worth automating.

## How does it work?
This section is an overview of what software libraries/code is running on each system, and how they interact.  It's detailed, but the point is to provide a jumping-off point for further inquiry, as well as a very high-level introduction to what libraries and frameworks are in play here.

### On the UAV
The UAV runs a MAVLink-compatible firmware such as ArduPilot or PX4.  The GCS communicates with it via MAVLink, and the internals of the autopilot can vary depending on the specific implementation.

### The GCS server enviroment

 * *Node.js* is the runtime environment of the GCS.  It manages the MAVLink communications with the UAV and any client requests/data updates that need to happen.  As the UAV sends updates via radio, Node.js interprets those updates and tells the GUI on each client to respond accordingly.  When the MO or VO issue a command to the UAV, Node.js is in the middle, translating the user's goals into MAVLink commands that are sent via radio to the autopilot.
 * *Express* is the HTTP web server, running in Node, that manages initial client requests.  It's the code that responds when the client surfs to the IP address that is running the GCS.
 * *Grunt* is part of the continuous integration process.  Grunt takes all of the code that the server needs to provide to clients to run the GUI and assembles it in a compact, efficient form.
 * *Socket.io* is how Node.js can interact in realtime with multiple clients.  It's a client/server technology, unlike HTTP, that operates in realtime: the moment an update is available from the UAV, Socket.io can trigger changes on each client within milliseconds without constant polling.
 * *Mocha* and *Should* are testing frameworks and assertion frameworks, respectively, that are used to write tests against the server-side code.  Together, Mocha and Should make it possible to write natural-language assertions about how software should operate: ```signal.strength.should.be.greater.than(5)```, for example, could represent a test of expected signal strength from a UAV.
 * *Jade* is a templating language that Grunt compiles to HTML.  This means we don't need to hand-code HTML, and we can interpolate "live" updates and changes to the user interface easily.
 * *LESS* is a superset of CSS, which Grunt compiles down to CSS for use in the browser.  LESS, like SASS and other similar language efforts, is a nice syntax that saves time when writing style rules.
 * *Winston* is a logging library that provides basic, consistent logging across multiple code modules.
 * *nconf* is used for reading and parsing configuration files.

### The GCS client GUI environment

 * *Backbone.js* is an MV* architecture that provides structure to the client code to help arrange logic into distinct "data models," which contain information about the state of the UAV and mission, and "views," which handle user interface controls and actions such as button clicks, window popups, and so on.
 * *jquery* is a library that makes web development predictable, stable, and sane across multiple browsers and versions of browsers.
 * *Jasmine* is the unit testing framework that runs against the client GUI.  This is the testing framework that makes it possible to ensure that certain events occur when certain buttons are clicked, etc.
 * *Leaflet* is the mapping framework we're using, because it's simple, fast, and well-tuned for mobile devices.  Given the scale at which UAV operations happen, we don't need different geographic projections, so this is a good choice relative to other awesome projects like OpenLayers.
 * *Bootstrap* is a GUI framework containing basic layout, button, and other widgets.  This saves us time from having to develop basic user interface components, and it looks nice, too (thanks, Twitter!)

#### Some libraries are used on both the client and the server

 * *Require.js* is a dependency manager for complex Javascript applications.  This code makes it possible to declare segments of code that require other code, similar to how ```require``` or ```include``` directives work in other languages.
 * *Underscore.js* is a utility-belt library that is used for functional programming paradigms and making Javascript useful.

## It's 4:30 AM and the door is open
This project is still young and a lot of the code leaves a lot to be desired.

 * The Javascript MAVLink implementation isn't flight-tested and its integration into this GCS isn't finalized.  Its structure and/or interface may change; there's parts around it that feel awkward, but may not matter in practice.
 * The core server code isn't well-factored or modularized, and this will need to be addressed as the project moves beyond initial exporation into real-world utilization.
 * The client isn't well-packaged/served/defended.  This means that things like hitting 'refresh,' etc, aren't always well defined, and resizing the screen isn't always happy.  Not a big deal, but it can be done better.  *and so it shall*
