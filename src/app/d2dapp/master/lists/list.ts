                      
/******************************************************************************************************
 
 Copyright 2016 Olympus Consultancy Limited - All Rights Reserved 
 You may NOT use, copy, distribute or modify this code unless you have written 
 consent from the author which may be obtained from emailing dave@ocl.ie 

******************************************************************************************************/

/******************************************************************************************************
 class layer
******************************************************************************************************/
"use strict";
export class List {
	constructor( 
		public id?: number
		 	,public name?: string
		 	,public active?: boolean
		 	,public isMetaData?: boolean
		 	,public display?: number
		 	,public sort?: number
		  ) { }
}
    
	
	