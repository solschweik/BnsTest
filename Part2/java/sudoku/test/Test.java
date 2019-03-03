import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import sudoku.Sudoku;

public class Test {

	@org.junit.Test
	public void testIntToDigitsPos() {
		List<Integer> res = new LinkedList<Integer>();
		Sudoku.intToDigits(1234567890, 9, res);
		assertArrayEquals(new Integer[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}, res.toArray());
	}
	
	@org.junit.Test
	public void testIntToDigitsNeg() {
		List<Integer> res = new LinkedList<Integer>();
		Sudoku.intToDigits(123456000, 9, res);
		assertNotEquals(new Integer[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}, res.toArray());
	}

	@org.junit.Test
	public void testCheckLinePos() {
		List<Integer> res = new LinkedList<Integer>();
		Sudoku.intToDigits(123456789, 8, res);
		
		List<String> errList = Sudoku.checkLine(res);
		assertNull(errList);
	}
	
	@org.junit.Test
	public void testCheckLineNeg() {
		List<Integer> res = new LinkedList<Integer>();
		Sudoku.intToDigits(124459789, 8, res);
		
		List<String> errList = Sudoku.checkLine(res);
		assertNotNull(errList);
		
		assertArrayEquals(new String[] {"3",  "6"}, errList.toArray());
	}
	
	@org.junit.Test
	public void checkVerticalLinePos() {
		List<List<Integer>> v = new LinkedList<List<Integer>>();
		v.add(Arrays.asList(1));
		v.add(Arrays.asList(3));
		v.add(Arrays.asList(5));
		v.add(Arrays.asList(7));
		v.add(Arrays.asList(9));
		v.add(Arrays.asList(2));
		v.add(Arrays.asList(4));
		v.add(Arrays.asList(6));
		v.add(Arrays.asList(8));
		List<String> errList = Sudoku.checkVerticalLine(v, 0);
		assertNull(errList);
	}
	
	@org.junit.Test
	public void checkVerticalLineNeg() {
		List<List<Integer>> v = new LinkedList<List<Integer>>();
		v.add(Arrays.asList(1));
		v.add(Arrays.asList(2));
		v.add(Arrays.asList(5));
		v.add(Arrays.asList(7));
		v.add(Arrays.asList(9));
		v.add(Arrays.asList(2));
		v.add(Arrays.asList(2));
		v.add(Arrays.asList(6));
		v.add(Arrays.asList(8));
		List<String> errList = Sudoku.checkVerticalLine(v, 0);
		assertArrayEquals(new String[] {"3",  "4"}, errList.toArray());
	}
}
