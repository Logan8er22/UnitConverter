var unitConverter = angular.module('UnitConverter', []);

unitConverter.controller('UnitConverterController', [
    '$scope', function($scope){
        
        var ucc = this;
        
        //attributes
        ucc.metricLengthValue = 0;
        ucc.imperialLengthValue = 0;
        
        ucc.metric_volume_units = 
        [
            {
                unit_name: "Cubic Centimeters",
                unit_code: "cm3",
                type: "metric",
                value: 0.0610
            },
            {
                unit_name: "Cubic Decimeters",
                unit_code: "dm3",
                type: "metric",
                value: 0.0353
            },
            {
                unit_name: "Cubic Meters",
                unit_code: "m3",
                type: "metric",
                value: 1.3080
            },
            {
                unit_name: "Liters",
                unit_code: "l",
                type: "metric",
                value: 1.76
            },
            {
                unit_name: "Hecktoliters",
                unit_code: "hl",
                type: "metric",
                value: 21.997
            }
        ];
        
        function metricLengthUpdated(){
            console.log(ucc.metricLengthValue);
            ucc.metricLengthValue = ucc.ItoM(ucc.imperialLengthValue);
        }
        
        $scope.$watch('ucc.metricLengthValue', 'metricLengthUpdated');
        
        ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];
        
        
        ucc.imperial_volume_units = 
        [
            {
              unit_name: "Cubic Inches",
              unit_code: "in3",
              type: "imperial",
              value: 16.387
            },
            {
              unit_name: "Cubic Feet",
              unit_code: "ft3",
              type: "imperial",
              value: 0.0283
            },
            {
              unit_name: "Fluid Ounces",
              unit_code: "fl oz",
              type: "imperial",
              value: 28.431
            },
            {
              unit_name: "Pints",
              unit_code: "pt",
              type: "imperial",
              value: 0.5683
            },
            {
              unit_name: "Gallons",
              unit_code: "gal",
              type: "imperial",
              value: 4.5461
            },
        ];
        
        function imperialLengthUpdated(){
            console.log(ucc.imperialLengthValue);
            ucc.imperialLengthValue = ucc.MtoI(ucc.metricLengthValue);
        }
        
        $scope.$watch('ucc.imperialLengthValue', imperialLengthUpdated);
        
        ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];
        
        
        
        //behaviors
        ucc.showSelectedMetricUnit = function(){
            console.log(ucc.selected_metric_volume_unit.unit_name);
        };
        
        ucc.showSelectedImperialUnit = function(){
            console.log(ucc.selected_imperial_volume_unit.unit_name);
        };
        
        ucc.showSelectedMetricUnitValue = function(){
            console.log(ucc.selected_metric_volume_unit.value);
        };
        
        ucc.showSelectedImperialUnitValue = function(){
            console.log(ucc.selected_imperial_volume_unit.value);
        };
        
        ucc.MtoI = function(metricLengthValue){
            return (metricLengthValue * ucc.selected_imperial_volume_unit.value);
        };
        
        ucc.ItoM = function(imperialLengthValue){
            return (imperialLengthValue * ucc.selected_metric_volume_unit.value);
        };
    }
]);