var firebaseConfig = {
    apiKey: "AIzaSyBDTUSsz3pHEzda3B8N46QDfYIWUt5KCrY",
    authDomain: "test-6c240.firebaseapp.com",
    databaseURL: "https://test-6c240-default-rtdb.firebaseio.com",
    projectId: "test-6c240",
    storageBucket: "test-6c240.appspot.com",
    messagingSenderId: "375982380697",
    appId: "1:375982380697:web:7ff010aafb3d84509cca08",
    measurementId: "G-PRD8E7HED5"
  };
  
firebase.initializeApp(firebaseConfig);













  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }