let myPromise =  Promise.resolve( 'done' )
.then(

	( val ) => {
		console.log( val )
		throw new Error( `It's a problem` );
	}

)
.then(

	( val ) => console.log( val )

)
.catch(  ( err ) => {console.log (`we found a problem.`, err, `any ideas?`)} )