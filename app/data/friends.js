// ===============================================================================
// DATA
// Below data will hold Friends.
// bob is the initial friend.
// ===============================================================================

var friendsArray = [
    {
        "name":"Bob",
        "photo":"http://cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  