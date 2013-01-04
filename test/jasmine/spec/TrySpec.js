require(['Views/Try'], function(TryView) {

  describe("TryView", function() {
    
    beforeEach(function() {
      setFixtures(sandbox({id:'try'}));
    });

    it('Includes views correctly', function() {
      expect(TryView).toBeDefined();
    });

    it('Can access templates and fixtures', function() {
      var v = new TryView();
      v.render();
      expect($('#try')).not.toBeEmpty();
    });

  });

});