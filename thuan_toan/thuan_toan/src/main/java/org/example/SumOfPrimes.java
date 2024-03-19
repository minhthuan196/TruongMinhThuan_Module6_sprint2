package org.example;

public class SumOfPrimes {
    static boolean isPrime(int num) {
        if (num <= 1)
            return false;
        if (num == 2)
            return true;
        if (num % 2 == 0)
            return false;
        for (int i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    static int sumOfPrimes(int n) {
        int sumPrimes = 0;
        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                sumPrimes += i;
            }
        }
        return sumPrimes;
    }

    public static void main(String[] args) {
        int n = 20;
        System.out.println("Tổng các số nguyên tố từ 1 đến " + n + " là: " + sumOfPrimes(n));
    }
}
