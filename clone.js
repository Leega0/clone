function clone(obj){
      var copyObj;
      switch (typeof obj) {
        case "undefind":
          break;
        case "string":
          copyObj = obj+"";
          break;
        case "number":
          copyObj = obj - 0;
        case "boolean":
          copyObj = obj;
          break;
        case "object":
          if (obj===null) {
            copyObj = obj;
          }else {
            //如果对象的构造函数与数组的构造函数一致
            if (obj.constructor === [].constructor) {
               copyObj=[];
               for(i in obj){
                 copyObj.push(clone(obj[i]));
               }
            }else {
              copyObj = {};
              for(var k in obj){
                copyObj[k]=clone(obj[k]);
              }
            }
          }
          break;
        default:
          copyObj = obj;
          break;

      }
      return copyObj;
    }
