
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = { apiKey: "AIzaSyBwMTywqrQU1OW2GRQF-gJ_bFjwK5jGQSE", databaseURL: "https://basetggaf-default-rtdb.firebaseio.com", projectId: "basetggaf" };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginBtn').onclick = async () => {
    const e = document.getElementById('email').value;
    const p = document.getElementById('pass').value;
    try {
        await signInWithEmailAndPassword(auth, e, p);
        document.getElementById('view-auth').classList.remove('active');
        document.getElementById('view-main').classList.add('active');
    } catch (err) { alert("Ошибка: Проверьте данные!"); }
};
