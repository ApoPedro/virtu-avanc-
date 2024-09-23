document.addEventListener("DOMContentLoaded", function event(event) {
    var options = {
        type:'line',
        labels:['jan','feb','mar','apr','may','jun','jul','aug'],
        data:[
          {
            values: [ 0.90, 0.20, 0.40, 0.35, 0.37, 0.50, 0.50, 0.50],
            color: 'rgba(0,175,255,.6)'
          },
          {
            values: [ 0.10, 0.25, 0.6, 0.7, 0.4, 0.9, 0.7, 0.8],
            color: 'rgba(0,255,235,.6)'
          }
        ]
      };
      var chart = new SnapChart('#bar-chart',options);   
});