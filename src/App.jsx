import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from './pages/Login';
import RegisterPage from "./pages/Register.jsx";
import DashboardPage from "./pages/Dashboard.jsx";
import UserPage from "./pages/User.jsx";
import MonitoringPage from "./pages/Monitoring.jsx";
import PostPage from "./pages/Post.jsx";
import ApprovedPostPage from "./pages/ApprovedPost.jsx";
import CreatePostPages from "./pages/CreatePost.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                    <Route path="dashboard" element={<DashboardPage/>} >
                        <Route path="users" element={<UserPage/>}/>
                        <Route path="" element={<MonitoringPage />} />
                        <Route path="posts" element={<PostPage/>} />
                        <Route path="posts-published" element={<ApprovedPostPage />} />
                        <Route path="create-posts" element={<CreatePostPages /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;