import { boot } from 'quasar/wrappers'
import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { VueFire, VueFireAuth } from 'vuefire'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK8AJmJPmUrHjPvKl486i99SE_Wfk0R_4",
  authDomain: "temp-projekt-220s.firebaseapp.com",
  databaseURL: "https://temp-projekt-220s-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "temp-projekt-220s",
  storageBucket: "temp-projekt-220s.appspot.com",
  messagingSenderId: "401787728103",
  appId: "1:401787728103:web:3f9f7614f1dae5d1c13242"
}

const apps = getApps()
let firebaseApp
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  firebaseApp = apps[0]
}

const db = getDatabase(firebaseApp)

export default boot(async ({ app }) => {
    app
        .use(VueFire, {
            // imported above but could also just be created here
            firebaseApp,
            modules: [
                // we will see other modules later on
                VueFireAuth(),
            ],
        })
})


export { db }
