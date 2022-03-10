import rlsync from 'readline-sync';

var Matrix = [];

function createHourglass(n, side) {
    let _matrix = [];
    let _array = [];
    
    for(let row = 0 ; row < n ; row++){
        
        for( let col = 0 ; col < n; col++){

            //borderLeft
            if(col===0){
                _array.push('#');
                continue;
            }

            //breaking line and borderRight
            if(col === n - 1){
                _array.push(`#\n`);
                continue;
            }

            //border top and bottom
            if(row===0 || row===n-1){
                _array.push('#')
                continue;
            }

            //principal diagonal
            if(row===col){
                _array.push('#');
                continue;
            }

            //secondary diaginal
            if(row+col +2 === n + 1){
                _array.push('#');
            } else{
                _array.push(' ');
            }

        } //ending for cols

        //filling in half of the hourglass

        if(side){ // if side true, user wants the sand upside
        if(row < (n/2) ){

            var leftDiagonalBorder;
            var rigthDiagonalBorder;

            _array.forEach((string, index) => {

                let col = index;

                if(row===col){
                    leftDiagonalBorder = col 
                } 
                if(row+col +2 === n + 1){
                    rigthDiagonalBorder = col
                }

            });

            //here, i want to fill any char that is between my diagonals
            _array.forEach((string, index) => {
                let col = index;
                if(leftDiagonalBorder < col  && col < rigthDiagonalBorder){
                    _array[col] = '#';
                }
            })

            _matrix.push(_array.join(''));
            _array = [];
            continue;
        }
        }else{ //if side is false, user wants the sand bottomside
            if(row > (n/2) ){

                var leftDiagonalBorder;
                var rigthDiagonalBorder;
    
                _array.forEach((string, index) => {
    
                    let col = index;
    
                    if(row===col){
                        leftDiagonalBorder = col 
                    } 
                    if(row+col +2 === n + 1){
                        rigthDiagonalBorder = col
                    }
    
                });
    
                //here, i want to fill any char that is between my diagonals
                _array.forEach((string, index) => {
                    let col = index;
                    if(leftDiagonalBorder > col  && col > rigthDiagonalBorder){
                        _array[col] = '#';
                    }
                })
    
                _matrix.push(_array.join(''));
                _array = [];
                continue;
            }
        }
        
        _matrix.push(_array.join(''));
        _array = [];

    }//ending for rows

    return _matrix.join('');

}

const init = () => {
    var booleanSide = 2;

    var n = rlsync.question('entre com o valor de n:');

    while(booleanSide!==0 && booleanSide!==1){
        console.log('entre a area inicial da areia(0-PARTE SUPERIOR, 1- PARTE INFERIOR )');
        var booleanSide = rlsync.questionInt();
    }
    
    if(booleanSide ===0){
        Matrix = createHourglass(Number(n), true);
    }else if(booleanSide === 1){
        Matrix = createHourglass(Number(n), false);
    }

    console.log(Matrix);
}

init()