#include "vntlib.h"

        
KEY address user;

           
KEY address auditor;

              
KEY string grade;

                  
KEY string FileHash;

              

void keylo7vcvr5(){
AddKeyInfo( &FileHash, 6, &FileHash, 9, false);
AddKeyInfo( &user, 7, &user, 9, false);
AddKeyInfo( &auditor, 7, &auditor, 9, false);
AddKeyInfo( &grade, 6, &grade, 9, false);
}
constructor Update(){
keylo7vcvr5();
InitializeVariables();
	grade = 0;
	FileHash = "";
}

UNMUTABLE
void addGrade(string data)
{
keylo7vcvr5();
	grade = SHA3(data);
}

UNMUTABLE
void subGrade(string data)
{
keylo7vcvr5();
	grade = SHA3(data);
}

UNMUTABLE
void setFileHash(string hash)
{
keylo7vcvr5();
	FileHash = hash;
}