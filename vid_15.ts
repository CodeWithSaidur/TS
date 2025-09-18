// 02:32:19
// setup typescript

// 1. Install TypeScript
// npm install -g typescript
// Check version:
// tsc -v

// 2. Create a Project
// Create a new folder for your project and initialize it:
// mkdir TS_by_Sabed
// cd TS_by_Sabed
// npm init -y

// 3. Install TypeScript Locally (Best Practice)
// Instead of only global install, also install it locally so the project is portable:
// npm install --save-dev typescript

// 4. Generate tsconfig.json
// This file tells the compiler how to handle TypeScript.
// npx tsc --init

// tsconfig.json
/*
  {
  "compilerOptions": {
    "target": "ES6",                         
    "module": "commonjs",                    
    "outDir": "./dist",                      
    "rootDir": "./src",                      
    "strict": true,                          
    "esModuleInterop": true,                 
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true                     
  }
}
*/

// 5. Run in Watch Mode
// npx tsc --watch

export {}
