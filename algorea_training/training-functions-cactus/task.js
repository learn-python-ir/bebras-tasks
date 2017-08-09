function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         marker: { num: 2, img: "marker.png", side: cellSide, category: "marker", isMarker: true, isObstacle: false, hasColor: true, color: "marker", zOrder: 0 },
         paint: { img: "paint.png", side: cellSide, category: "paint", color: "gris", isPaint: true, zOrder: 1 }
      },
      maxInstructions: {
         easy: 30,
         medium: 30,
         hard: 60
      },
      includeBlocks: {
         groupByCategory: {
            easy: true,
            medium: true,
            hard: true
         },
         generatedBlocks: {
            robot: {
               easy: ["north", "south", "east", "west", "paint"],
               medium: ["north", "south", "east", "west", "paint"],
               hard: ["north", "south", "east", "west", "paint"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["functions"],
            singleBlocks: {
               easy: [],
               medium: ["controls_repeat_ext"],
               hard: ["controls_repeat_ext"]
            }
         }
      },
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarkersPainted
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1],
                   [1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
                   [1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1],
                   [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
                   [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
                   [1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1],
                   [1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1],
                   [1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1],
                   [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1],
                   [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1],
                   [1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1],
                   [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1],
                   [1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1],
                   [1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1],
                   [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1],
                   [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 11, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
