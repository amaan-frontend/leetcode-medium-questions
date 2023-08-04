
#include <stdio.h>

int jumpingOnClouds(int n, int c[]) {
    int jumps = 0;
    int i = 0;
            
    while (i < n - 1) {
    if (i + 2 < n && c[i + 2] == 0) {
    i += 2; // Jump two clouds if it's safe
    } else {
    i += 1; // Otherwise, jump one cloud
     }
     jumps++;
    }
       return jumps;
        }
                                                                                    
    int main() {
     int n;
      scanf("%d", &n);
                                                                                                
          int c[n];
         for (int i = 0; i < n; i++) {
         scanf("%d", &c[i]);
           }
                                                                                                                        
        int result = jumpingOnClouds(n, c);
             printf("%d\n", result);
                                                                                                                                    
          return 0;
            }
