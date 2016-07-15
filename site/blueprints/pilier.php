<?php if(!defined('KIRBY')) exit ?>

title: Pilier
pages: 
  -template: project 
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  labtype: 
    label: Lab type
    type: text
    width: 1/2
  pic:
    label: Picture link 
    type: url
    width: 1/2
  missionex:
    label: Mission example
    type: text
  activityex:
    label: Exemples d'activités 
    type: text
  text:
    label: Text
    type:  textarea