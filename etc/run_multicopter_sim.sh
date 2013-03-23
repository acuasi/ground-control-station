# Convenience script to restart the simulated arducopter + mavproxy for development.

# Paths to parts of the toolchain
ARDUCOPTER_PATH=$HOME/ArduCopter.elf
SIM_MULTICOPTER_PATH=$HOME/repos/ardupilot/Tools/autotest/pysim/sim_multicopter.py
MAVPROXY_PATH=$HOME/repos/MAVProxy/mavproxy.py

# Find and kill them all!  ...only if they're running.  Put a bullet in their back.
ps aux | grep 'ArduCopter.elf' | grep -v 'grep' | awk '{print $2}' | xargs kill
ps aux | grep 'sim_multicopter.py' | grep -v 'grep' | awk '{print $2}' | xargs kill
ps aux | grep 'mavproxy.py' | grep -v 'grep' | awk '{print $2}' | xargs kill

# Run them all!
$ARDUCOPTER_PATH &
$SIM_MULTICOPTER_PATH --home -35.362938,149.165085,584,270 &
#$MAVPROXY_PATH --master tcp:127.0.0.1:5760 --sitl 127.0.0.1:5501 --out 127.0.0.1:14550
