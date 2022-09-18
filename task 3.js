   var arr=[{"name":"john","age":"23"},{"name":"tina","age":"24"}];
    
    //FOR LOOP
  
    for(var i=0;i<arr.length;i++)
    {
    console.log(arr[i].name);
     }

     //FOR IN LOOP
  
      for( var i in arr)
       {
        console.log(i,arr[i]);
       }

       // FOR OF LOOP

       for (var i of arr)
       {
       console.log(i);
       }

       //FOR EACH
       arr.forEach(myfunction)
       function myfunction(i)
       {
       console.log(i);
       }


       var resume={
        "basics": {
            "name": "KAYATHIRI",
            "label": "A",
            "email": "kayu.uma18@gmail.com",
            "phone": "8015215244",
            "degree": "B.E(cse)",
              "location": {
              "address": "1207 a ,national colony",
              "postalCode": "626123",
              "city": "sivakasi",
              "region": "hindu"
            },
            
            "education": [
                {
                  "institution": "Unnamalai Institute of Technology",
                  "area": "kovilpatti",
                  "studyType": "regular",
                  "startDate": "2011-08-15",
                  "endDate": "2015-04-20",
                  "gpa": "7",
                  "courses": [
                    "B.E-COMPUTER SCIENCE"
                  ]
                }
              ],
              "work": [
                {
                  "company": "IDHAYAM-G Finance",
                  "position": "credit execitive",
                }
                  ],
                  "skills": [
                    {
                      "name": "Programming Languages",
                      "level": "",
                      "keywords": [
                        "'C','C++','HTML'"
                      ]
                    }
                  ],
                  "languages": [
                    {
                      "language": "Tamil,English",
                      "fluency": "Good"
                    }
                  ],
                  "interests": [
                    {
                      "name": "Sports",
                      "keywords": [
                        "Chess"
                      ]
                    }
                  ],    

            },
            
        }
            console.log(resume);
    
    
        
    
        






