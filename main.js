(function() {

  
  function Circle(){

      var top, left, bgc, 
        borderWeight = '0px';
      var figure = 'square';
      var id = 0;
      var colors = ['#fffafa', '#ffffe0', '#fffff0', '#ffffff'];

      function setCoordinates( newX, newY ){
        top = newY + 'px';
        left = newX + 'px';
      }

      function setBgc(){
        bgc = colorInp.value; //!!!!!!
      }

      function setBorderToWhiteColor (){
          if(colors.indexOf(bgc) > -1) {
            borderWeight = '1px solid black';
          } else {
            borderWeight = '0px';
          }
      }

      function setFigure() {
        var radios = document.getElementsByName('figure');
        for (var i = 0; i < radios.length; i++) {

          if( radios[i].checked ){
            figure = radios[i].value;
          }

        }
      }

      this.create = function( e ){

        var html = document.getElementsByTagName('html');
        // console.log( html[0] );

        if( e.target === html[0] ){

          setCoordinates( e.clientX, e.clientY );
          setBorderToWhiteColor();
          setBgc();
          setFigure();

          var elem = document.createElement('div');
          elem.style.top = top;
          elem.style.left = left;
          elem.style.backgroundColor = bgc;
          elem.style.border = borderWeight;

          elem.className = figure;

          document.body.appendChild( elem )

        }

      }

    }

    var c = new Circle();

    window.addEventListener( 'click', c.create );



    // function MyClass() {
    //   this.x = 10;
    //
    //   var a;
    //
    //   this.setA = function( newA ){
    //
    // myClass.setA( 33 );
    //
    // console.log( myClass.getA() );

    // console.log(myClass.getY());
    // myClass.x = 20
    // console.log( myClass.x );



    // var btns = document.getElementsByTagName('button');
    // for( var i = 0; i < btns.length; i++ ){
    //   console.log( btns[i].innerText );
    // }


    // var btn = document.getElementById( 'btn1' );
    // // console.log( btn );
    //
    // console.log( btn1.innerText );


    // function foo() {
    //   alert('Hello');
    // }


    // function clicker() {
    //   alert('clicker')
    // }
    //
    // btn1.onclick = clicker;



    // btn1.addEventListener( 'click', function(){
    //   alert('sdfsd');
    // } )

    // function clicker( e ) {
    //   console.log( e );
    // }
    //
    // btn1.addEventListener( 'click', clicker )


    // link1.addEventListener('click', function( event ){
    //   event.preventDefault(); //!!!!!
    //   console.log('sdfs');
    // })



    // mainForm.addEventListener('submit', function( e ){
    //   e.preventDefault()
    //   console.log( this ); //!!!!!!
    // })

})()