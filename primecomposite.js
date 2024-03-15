import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PrimeChecker {

    // Function to check if a number is prime
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        } else if (number <= 3) {
            return true;
        } else if (number % 2 == 0 || number % 3 == 0) {
            return false;
        }
        int i = 5;
        while (i * i <= number) {
            if (number % i == 0 || number % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    // Function to generate a list of prime numbers up to a limit
    public static List<Integer> generatePrimeList(int limit) {
        List<Integer> primes = new ArrayList<>();
        for (int i = 2; i <= limit; ++i) {
            if (isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }

    public static void main(String[] args) {
        // Introduction and instructions
        System.out.println("Welcome to Prime Checker!");
        System.out.println("This program checks if a number is prime or composite.");
        System.out.print("Please enter a number between 1 and 100 to check: ");

        // Input
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        // Input validation
        if (num < 1 || num > 100) {
            System.out.println("Invalid input. Please enter a number between 1 and 100.");
            return;
        }

        // Output
        if (isPrime(num)) {
            System.out.println(num + " is a prime number.");
        } else {
            System.out.println(num + " is a composite number.");
        }

        // Generate a list of prime numbers up to 100
        int limit = 100;
        List<Integer> primeList = generatePrimeList(limit);
        System.out.println("List of prime numbers up to 100:");
        for (int prime : primeList) {
            System.out.print(prime + " ");
        }
        System.out.println();
    }
}
