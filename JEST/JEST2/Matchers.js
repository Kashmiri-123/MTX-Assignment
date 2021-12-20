const Matchers = {
    returnObject: function(){
        var empObj = {"id":102, "name":"Kashmiri", "dept":"CS", "designation":"FSD"}
        return empObj;
    },

    returnUrl: function(){
        var url = "http://www.google.com";
        return url;
    },

    returnArrNames: function(){
        var arrNames = ["Kashmiri", "Manu", "Kaku"];
        return arrNames;
    }
}

module.exports = Matchers;