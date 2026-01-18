import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import USerContext from './UserContext';


function App() {
const userData = {
name: "Jane Doe",
email: = "jane.doe@example.com"

  return (
    <div>
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}>
	<ProfilePage />
      </UserContext.Provider>

      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys cooking and traveling" 
      />
      
      <Footer />
    </div>
  );
}

export default App;

