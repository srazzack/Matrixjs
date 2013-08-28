        var Matrix = function (rows, columns) {
            this.matrix = [];
            
            for(var i = 0; i < rows; i++) {
                this.matrix[i] = [];
                for(var j = 0; j < columns; j++) {
                    this.matrix[i][j] = null;
                }
            }
            return;          
        };

        Matrix.prototype.set = function(row, column, value) {
            if(this.matrix[row][column] !== undefined) {
                this.matrix[row][column] = value;
            }
            else {
                throw new RangeError();
            }
        };

        Matrix.prototype.get = function(row, column) {
            return this.matrix[row][column];
        };

        Matrix.prototype.getRows = function () {
            return this.matrix.length;
        };

        Matrix.prototype.getColumns = function () {
            return this.matrix[0].length;
        };

        Matrix.prototype.print = function () {
            for(var i = 0; i < this.getRows(); i++) {
                for(var j = 0; j < this.getColumns(); j++) {
                    console.log(i + ':' + j, this.matrix[i][j]);
                }
            }
        };

        Matrix.prototype.clear = function() {
            for(var i = 0; i < this.getRows(); i++) {
                for(var j = 0; j < this.getColumns(); j++) {
                    this.matrix[i][j] = null;
                }
            }        
        };