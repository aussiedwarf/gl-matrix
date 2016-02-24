/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

describe("mat2", function() {
    var mat2 = require("../../src/gl-matrix/mat2.js");

    var out, matA, matB, identity, result;

    beforeEach(function() {
        matA = [1, 2,
                3, 4];

        matB = [5, 6,
                7, 8];

        out =  [0, 0,
                0, 0];

        identity = [1, 0,
                    0, 1];
    });

    describe("create", function() {
        beforeEach(function() { result = mat2.create(); });
        it("should return a 4 element array initialized to a 2x2 identity matrix", function() { expect(result).toBeEqualish(identity); });
    });

    describe("clone", function() {
        beforeEach(function() { result = mat2.clone(matA); });
        it("should return a 4 element array initialized to the values in matA", function() { expect(result).toBeEqualish(matA); });
    });

    describe("copy", function() {
        beforeEach(function() { result = mat2.copy(out, matA); });
        it("should place values into out", function() { expect(out).toBeEqualish(matA); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("identity", function() {
        beforeEach(function() { result = mat2.identity(out); });
        it("should place values into out", function() { expect(result).toBeEqualish(identity); });
        it("should return out", function() { expect(result).toBe(out); });
    });

    describe("transpose", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.transpose(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([1, 3, 2, 4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.transpose(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([1, 3, 2, 4]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("invert", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.invert(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([-2, 1, 1.5, -0.5]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.invert(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([-2, 1, 1.5, -0.5]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("adjoint", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.adjoint(out, matA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([4, -2, -3, 1]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.adjoint(matA, matA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([4, -2, -3, 1]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("determinant", function() {
        beforeEach(function() { result = mat2.determinant(matA); });
        
        it("should return the determinant", function() { expect(result).toEqual(-2); });
    });

    describe("multiply", function() {
        it("should have an alias called 'mul'", function() { expect(mat2.mul).toEqual(mat2.multiply); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.multiply(out, matA, matB); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([23, 34, 31, 46]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.multiply(matA, matA, matB); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([23, 34, 31, 46]); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat2.multiply(matB, matA, matB); });
            
            it("should place values into matB", function() { expect(matB).toBeEqualish([23, 34, 31, 46]); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("rotate", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.rotate(out, matA, Math.PI * 0.5); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([3, 4, -1, -2]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.rotate(matA, matA, Math.PI * 0.5); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([3, 4, -1, -2]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("scale", function() {
        var vecA;
        beforeEach(function() { vecA = [2, 3]; });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.scale(out, matA, vecA); });
            
            it("should place values into out", function() { expect(out).toBeEqualish([2, 4, 9, 12]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.scale(matA, matA, vecA); });
            
            it("should place values into matA", function() { expect(matA).toBeEqualish([2, 4, 9, 12]); });
            it("should return matA", function() { expect(result).toBe(matA); });
        });
    });

    describe("str", function() {
        beforeEach(function() { result = mat2.str(matA); });
        
        it("should return a string representation of the matrix", function() { expect(result).toEqual("mat2(1, 2, 3, 4)"); });
    });

   describe("frob", function() {
        beforeEach(function() { result = mat2.frob(matA); });
        it("should return the Frobenius Norm of the matrix", function() { expect(result).toEqual( Math.sqrt(Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2))); });
   });

   describe("LDU", function() {
        beforeEach(function() {L = mat2.create(); D = mat2.create(); U = mat2.create(); result = mat2.LDU(L, D, U, [4,3,6,3]);
                               L_result = mat2.create(); L_result[2] = 1.5;
                               D_result = mat2.create();
                               U_result = mat2.create();
                               U_result[0] = 4; U_result[1] = 3; U_result[3] = -1.5;
                              });
        it("should return a lower triangular, a diagonal and an upper triangular matrix", function() {
            expect(result[0]).toBeEqualish(L_result);
            expect(result[1]).toBeEqualish(D_result);
            expect(result[2]).toBeEqualish(U_result);
        });
   });

    describe("add", function() {
        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.add(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeEqualish([6, 8, 10, 12]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.add(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeEqualish([6, 8, 10, 12]); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat2.add(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeEqualish([6, 8, 10, 12]); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });
    });

    describe("subtract", function() {
        it("should have an alias called 'sub'", function() { expect(mat2.sub).toEqual(mat2.subtract); });

        describe("with a separate output matrix", function() {
            beforeEach(function() { result = mat2.subtract(out, matA, matB); });

            it("should place values into out", function() { expect(out).toBeEqualish([-4, -4, -4, -4]); });
            it("should return out", function() { expect(result).toBe(out); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matA is the output matrix", function() {
            beforeEach(function() { result = mat2.subtract(matA, matA, matB); });

            it("should place values into matA", function() { expect(matA).toBeEqualish([-4, -4, -4, -4]); });
            it("should return matA", function() { expect(result).toBe(matA); });
            it("should not modify matB", function() { expect(matB).toBeEqualish([5, 6, 7, 8]); });
        });

        describe("when matB is the output matrix", function() {
            beforeEach(function() { result = mat2.subtract(matB, matA, matB); });

            it("should place values into matB", function() { expect(matB).toBeEqualish([-4, -4, -4, -4]); });
            it("should return matB", function() { expect(result).toBe(matB); });
            it("should not modify matA", function() { expect(matA).toBeEqualish([1, 2, 3, 4]); });
        });
    });
});
