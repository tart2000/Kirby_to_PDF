<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type:  text
  logo:
    label: Logo
    type: Url
    width: 1/2
  theurl: 
    label: Link
    type: Url
    width: 1/2
  typologie:
    label: Typologie
    type: text
    width: 1/2
  pic:
    label: Picture
    type: Url
    width: 1/2
  mission: 
    label: Mission
    type: text
  text:
    label: Text
    type:  textarea
  facteurs: 
    label: Facteurs
    type: textarea

