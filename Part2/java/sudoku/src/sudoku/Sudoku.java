package sudoku;

import java.io.File;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Sudoku {
	public static void main(String[] args) {
		if (args.length != 1) {
			System.err.println("Please, provide file name!");
			System.exit(-1);
		}
		
		List<String> arr = new LinkedList<String>();
		try (Scanner s = new Scanner(new File(args[0]))) {
			while (s.hasNext()) {
				arr.add(s.nextLine());
			}
		} catch (Throwable t) {
			t.printStackTrace();
			System.exit(-2);
		}
		
		if(arr.size() != 9) {
			System.err.println("File should have exactly 9 rows");
			System.exit(-3);
		}

		List<List<Integer>> res = arr.stream().mapToInt(v -> Integer.parseInt(v))
				.boxed()
				.map(v -> {
					List<Integer> r = new LinkedList<Integer>();
					doIt(v, 8, r);
					return r;
				})
				.collect(Collectors.toList());
		
		boolean errorFound = false;
		for(int ndx=0; ndx<res.size(); ndx++) {
			if (res.get(ndx).size() < 9) {
				System.err.printf("ERROR: line %d should have exactly 9 numbers from 1-9. It has %d instead!", ndx+1, res.get(ndx).size());
				errorFound = true;
			}
		}
		
		if (errorFound) {
			System.exit(0);
		}
	
		
		for(int ndx=0; ndx<res.size(); ndx++) {
			List<Integer> li = res.get(ndx);
			List<String> herr = checkLine(li);
			List<String> verr = checkVerticalLine(res, ndx);
			errorFound |= (herr != null && !herr.isEmpty()) || (verr != null && !verr.isEmpty());
			
			if (herr != null && !herr.isEmpty()) {
				System.err.printf("Horizontal line %d does not contain following numbers: %s\n", ndx+1, herr);
			}
			if (verr != null && !verr.isEmpty()) {
				System.err.printf("Vertical line %d does not contain following numbers: %s\n", ndx+1, verr);
			}
		}
		if (!errorFound) {
			System.out.println("File is valid!");
		}
	}
	
	public static void doIt(Integer v, int ndx, List<Integer> res) {
		if (ndx <= 0) {
			res.add(v);
			return;
		}
		Double d = Math.floor(v / Math.pow(10, ndx));
		int cv = d.intValue();
		if (cv > 0 && cv <= 9) {
			res.add(cv);
		}
		doIt(((Double)(v - (cv * Math.pow(10, ndx)))).intValue(), ndx-1, res);
	}
	
	public static List<String> checkLine(List<Integer> l) {
		List<String> err = new LinkedList<String>();
		IntStream.range(1, 10).forEach(v -> {
			if (l.indexOf(v) <= -1) {
				err.add(Integer.toString(v));
			}
		});
		return err.isEmpty() ? null : err;
	}
	
	public static List<String> checkVerticalLine(List<List<Integer>> l, int ndx) {
		List<Integer> vl = l.stream().map(li -> li.get(ndx)).collect(Collectors.toList());
		return checkLine(vl);
	}
}
