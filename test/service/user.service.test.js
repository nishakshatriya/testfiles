const USER_SERVICE = require("../../src/service/userInfo.service");
const USER_MODULE = require("../../src/model/userInfo.model");
const CHAI = require("chai");
const ASSERT = CHAI.assert;
const SINON = require("sinon");

describe("Users testcases", function() {
  it("When given correct user data should Save data", function() {
    let obj = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };
    let userData = obj;
    SINON.stub(USER_MODULE, "create").yields(null, userData);
    USER_SERVICE.userDetails(userData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error while Storing User Details..");
      }
      ASSERT.equal(data, userData);
      USER_MODULE.create.restore();
    });
  });

  it("when given special chars in username should return err", function() {
    let obj = {
      NAME: "@@@@@@"
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given null in username should return err", function() {
    let obj = {
      NAME: null
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given undefined in username should return err", function() {
    let obj = {
      NAME: undefined
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given empty in username should return err", function() {
    let obj = {
      NAME: ""
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given string in phone no should return err", function() {
    let obj = {
      PHONE_NO: "sdjsjdfjv"
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given not a num in username should return err", function() {
    let obj = {
      PHONE_NO: NaN
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given null in phone no should return err", function() {
    let obj = {
      PHONE_NO: null
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given special chars in phone no should return err", function() {
    let obj = {
      PHONE_NO: "////"
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given string in pin should return err", function() {
    let obj = {
      PIN: "nisdhksdhsk"
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given NaN in pin should return err", function() {
    let obj = {
      PIN: NaN
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given null in city should return err", function() {
    let obj = {
      CITY: null
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given numbers in city should return err", function() {
    let obj = {
      CITY: 1426
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });

  it("when given empty in city should return err", function() {
    let obj = {
      CITY: ""
    };

    let userInfo = obj;
    let userData = {
      NAME: "nisha",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };

    SINON.stub(USER_MODULE, "create").yields(null, userInfo);
    USER_SERVICE.userDetails(userInfo, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.NAME, userData.NAME);
      USER_MODULE.create.restore();
    });
  });
});

describe("Users testcases", function() {
  it("When given wrong user name should return err", function() {
    let obj = {
      NAME: "13476172927302389",
      PHONE_NO: 9867854231,
      PIN: 411015,
      LOCALITY: "Tingre Nagar",
      ADDRESS: "Pune",
      CITY: "Pune",
      LANDMARK: "Airport Rd"
    };
    let userData = obj;
    SINON.stub(USER_MODULE, "create").yields(null, userData);
    USER_SERVICE.userDetails(userData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Invalid User Details..");
        USER_MODULE.create.restore();
      }
    });
  });
});
