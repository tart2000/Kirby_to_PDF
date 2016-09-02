<?php if(!defined('KIRBY')) exit ?>

title: Home
pages: false
fields:
  title:
    label: Title
    type:  text
  coverimage: 
    label: Background cover image
    type: selector
    mode: single
    types:
        - image
  logoimage:
    label: Logo image
    type: selector 
    mode: single
    types: 
        - image