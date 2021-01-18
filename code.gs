/*Access key provides additional security to your server calls.*/
var accessKey = "ilikeyourwork@cttricks";
var def_response = {"code":401,"msg":"invalid request, kindly check your access key and try again"}

function doGet(e){
   if(e.parameter.accessKey == accessKey){
      return runCodes(e);
   }
   
   return ContentService.createTextOutput(JSON.stringify(def_response));
}

function doPost(e){
   if(e.parameter.accessKey == accessKey){
      return runCodes(e);
   }
   
   return ContentService.createTextOutput(JSON.stringify(def_response));
}

function runCodes(e){
  var response = {"code":401,"msg":"data/code is not given","data":""};
  var client_data = e.parameter.data;
  if(client_data !== undefined && client_data !==""){
    try{
       var output = eval(client_data);
       response["code"] = 200;
       response["msg"] = "code executed successfully";
       response["data"] = output;
    }catch(e){
       response["code"] = 401;
       response["msg"] = e.toString();
       response["data"] = "";
    }
  }
  return ContentService.createTextOutput(JSON.stringify(response));
}
