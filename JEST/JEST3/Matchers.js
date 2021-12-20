var user =  [
    {"uid":"123", "pwd":"abc"},
    {"uid":"223", "pwd":"abcd"},
    {"uid":"323", "pwd":"abcc"},
    {"uid":"523", "pwd":"abc"},
]

const Matchers = {
    //question1
    returnSub: function(a,b){
        return a-b
    },

    returnMul: function(a,b){
        return a*b
    },

    returnDiv: function(a,b){
        return a/b
    },


    //question2
    returnLargest: function(a, b, c){
        if(a>b && a>c){
            return a;
        }
        else if(a<c && b<c){
            return c
        }
        return b;
    },

    returnFactorial: function(n){
        if(n <= 1){
            return 1;
        }
        else{
            var answer = 1;
            for(var i = n; i >= 1; i--){
                answer = answer * i;
              }
            return answer;
        }
    },

    returnCheckEven: function(a){
        if(a%2 === 0){
            return true;
        }
        else{
            return false;
        }
    },

    returnLargestofArray: function(){
        var arr = [4,7,1,2,0];
        var largest = arr[0];

        for(let val of arr){
            if(largest < val){
                largest = val
            }
        }
        return largest;
    },

    //question3
    returnBookDataById: function(id){
        var libObj1 = {"id":102, "name":"Book1","author1":"author2", "cost":900}
        var libObj2 = {"id":103, "name":"Book2","author2":"author3", "cost":904}
        var libObj3 = {"id":104, "name":"Book3","author3":"author4", "cost":800}
        var libObj4 = {"id":105, "name":"Book4","author4":"author5", "cost":860}
        var libObj5 = {"id":106, "name":"Book5","author5":"author6", "cost":460}

        var library = [libObj1, libObj2, libObj3, libObj4, libObj5]

        for(var data of library){
            if(id === data?.id){
                return data;
            }
        }
        return null;
    },

    //question5
    
    Login : function(uid, pwd){
        var isValid = false
        for(var usr of user){
            if(uid === usr.uid && pwd === usr.pwd){
                isValid = true;
                return "Valid User";
            }
        }
        if(!isValid){
            return "Invalid User"
        }
    }
}


module.exports = Matchers;