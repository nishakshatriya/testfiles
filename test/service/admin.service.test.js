const ADMIN_SERVICE = require("../../src/service/adminLogin.service");
const ADMIN_MODEL = require("../../src/model/adminLogin.model");
const CHAI = require("chai");
const EXPECT = CHAI.expect;
const ASSERT = CHAI.assert;
const SINON = require("sinon");

describe("Admin creation test cases", function() {
  it("when given valid data should create admin details", function() {
    let obj = {
      NAME: "nishakshatriya",
      EMAIL: "nisha.kshatriya08@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 9665544331
    };

    let adminData = obj;
    SINON.stub(ADMIN_MODEL, "create").yields(null, adminData);
    ADMIN_SERVICE.create(adminData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error while Storing Admin Details..");
      }
      ASSERT.equal(data, adminData);
      ADMIN_MODEL.create.restore();
    });
  });

  it("when given invalid user name should err msg", function() {
    let obj = {
      NAME: 12334,
      EMAIL: "pranali@gmail.com",
      PASSWORD: "pranali123",
      MOBILENO: 1234567890
    };

    let adminData = obj;
    SINON.stub(ADMIN_MODEL, "create").yields(null, adminData);
    ADMIN_SERVICE.create(adminData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error while Storing Admin Details..");
        ADMIN_MODEL.create.restore();
      }
    });
  });

  it("when given null in email id should give err ", function() {
    let obj = {
      EMAIL: null
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "pranali",
      EMAIL: "pranali@gmail.com",
      PASSWORD: "pranali123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given null in email id should give err ", function() {
    let obj = {
      EMAIL: ""
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "pranali",
      EMAIL: "pranali@gmail.com",
      PASSWORD: "pranali123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given undefined in email id should give err ", function() {
    let obj = {
      EMAIL: undefined
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "pranali",
      EMAIL: "pranali@gmail.com",
      PASSWORD: "pranali123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given empty in name should give err ", function() {
    let obj = {
      NAME: ""
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given symbol in name should give err ", function() {
    let obj = {
      NAME: "/"
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given null in name should give err ", function() {
    let obj = {
      NAME: null
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given string in mob number should give err ", function() {
    let obj = {
      MOBILENO: "jsjdfhsdjkf"
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given string in mob number should give err ", function() {
    let obj = {
      MOBILENO: ""
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given string in mob number should give err ", function() {
    let obj = {
      MOBILENO: NaN
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given string in mob number should give err ", function() {
    let obj = {
      MOBILENO: null
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given empty in pswd should give err ", function() {
    let obj = {
      PASSWORD: ""
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given null in pswd should give err ", function() {
    let obj = {
      PASSWORD: null
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given pswd less than 8 char should give err ", function() {
    let obj = {
      PASSWORD: "abcd"
    };

    let adminCredentials = obj;

    let savedCredentials = {
      NAME: "nisha",
      EMAIL: "nisha@gmail.com",
      PASSWORD: "nisha123@",
      MOBILENO: 1234567890
    };

    SINON.stub(ADMIN_MODEL, "login").yields(null, adminCredentials);
    ADMIN_SERVICE.login(adminCredentials, function(err, data) {
      if (err) {
        ASSERT.equal(err, "error while logging");
      }
      ASSERT.notEqual(data.EMAIL, savedCredentials.EMAIL);
      ADMIN_MODEL.login.restore();
    });
  });

});

describe("Admin login test cases", function() {
  it("when given valid data login details should login", function() {
    let obj = {
      EMAIL: "nisha.kshatriya08@gmail.com",
      PASSWORD: "nisha123"
    };

    let adminData = obj;
    SINON.stub(ADMIN_MODEL, "login").yields(null, adminData);
    ADMIN_SERVICE.login(adminData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error while Storing Admin Details..");
      }
      ASSERT.equal(data, adminData);
      ADMIN_MODEL.login.restore();
    });
  });

  it("when given invalid email in login should err msg", function() {
    let obj = {
      EMAIL: 13144,
      PASSWORD: "pranali123"
    };

    let adminData = obj;
    SINON.stub(ADMIN_MODEL, "login").yields(null, adminData);
    ADMIN_SERVICE.login(adminData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error while Storing Admin Details..");
        ADMIN_MODEL.login.restore();
      }
    });
  });
});
