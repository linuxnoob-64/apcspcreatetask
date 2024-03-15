#include <iostream>
 
using namespace std;
 
bool checkPrime(int number) {
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
 
int main() {
    int inputNum;
    cout << "Enter a number: ";
    cin >> inputNum;
 
    if (checkPrime(inputNum)) {
        cout << inputNum << " is a prime number." << endl;
    } else {
        cout << inputNum << " is a composite number." << endl;
    }
 
    return 0;
}

 Run this codeExplain this codeExplain this code
