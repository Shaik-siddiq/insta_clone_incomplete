/* 
clinet side rendered app: react(cra)
database which is Firebase
react-loading-skeleton
tailwind

Architecture (folder structure)
src
    components,
    constants,
    context,
    helpers,
    hooks,
    pages,
    styles(tailwind)
    lib(firebase is going to live)
    services (firebase functions in help)
*/

/* 
//production rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth.uid != null;
    }
  }
}
*/