import Vue from 'vue';
import cq from '../data/Chongqing'; 
var app = new Vue({
  el: '#app',
  data: {
    message: '重庆市企业可视化系统'
  }
});
var chongqing=cq();
var map = L.map('map').setView([35.00,114.00],4);												//设置初始地图查看的位置和尺度
			
			//添加底图
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'			
			}).addTo(map);

			L.geoJSON(chongqing).addTo(map);