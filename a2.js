/*********************************************************************************
*  WEB700 – Assignment2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: SANYA BANSAL Student ID: SBANSAL28(124797226) Date: 2nd JUNE,2023
*
********************************************************************************/ 

const collegeData = require('./modules/collegeData');

collegeData.initialize()
  .then(() => {
    console.log('Initialization successful');

    collegeData.getAllStudents()
      .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch(error => {
        console.error(error);
      });

    

    collegeData.getCourses()
      .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch(error => {
        console.error(error);
      });
      collegeData.getTAs()
      .then(tas => {
        console.log(`Successfully retrieved ${tas.length} TAs`);
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
