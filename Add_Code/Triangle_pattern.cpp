#include <bits/stdc++.h>
using namespace std;

int main()
{
	int n = 5;
	for (int i = n; i >= 1; i--) {
		for (int j = i; j >= 1; j--)
			cout << "* ";
		cout << endl;
	}
	return 0;
}
