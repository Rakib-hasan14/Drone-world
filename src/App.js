import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AuthProvider from './components/Context/AuthContext';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import AllDrons from './components/AllDrons/AllDrons';
import DroneOrder from './components/DroneOrder/DroneOrder';
import Dashboard from './components/Dashboard/Dashboard';
import Pay from './components/Pay/Pay';
import MyOrder from './components/MyOrder/MyOrder';
import Review from './components/Review/Review';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import AddDrone from './components/AddDrone/AddDrone';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageDrone from './components/ManageDrone/ManageDrone';

function App() {
  const obj = [
    {name:'DJI mini 2' , des:'With long battery life, a robust wireless connection, and 4K video, the DJI Mini 2 is the best drone youll find for less than $500.' , img:'https://i.pcmag.com/imagery/reviews/05XLyr5lHmUwD3twXxlUFzv-1.1604954082.fit_lim.size_238x139.jpg' , price: '$449'},
    {name:'DJI Mavic Air 2' , des:'With a compelling mix of imaging, stability, and safety features, DJIs Mavic Air 2 is the best drone you can buy for under $1,000.' , img:'https://i.pcmag.com/imagery/reviews/02WgLoQUiRpdCH86lvGvxxe-1.1588947813.fit_lim.size_238x139.jpg' , price: '$799'},
    {name:'DJI Air 2S' , des:'he DJI Air 2S is a small folding drone with a premium 1-inch sensor camera, 5.4K video, and a number of automated flight and safety features, making it a pro-minded alternative to the more affordable Mavic Air 2.' , img:'https://i.pcmag.com/imagery/reviews/03SBVB3dvq5wKhOWeatb9Ad-17.1618346354.fit_lim.size_238x139.jpg' , price: '$999'},
    {name:'DJI Mavic 3' , des:'The DJI Mavic 3 puts a Hasselblad camera in a small, folding drone. It captures stunning video and stills, but its missing a few promised features at launch.' , img:'https://i.pcmag.com/imagery/reviews/06xHFd7vLG3j616lKSRGOV2-16.1635967376.fit_lim.size_238x139.jpg' , price: '$2199'},
    {name:'DJI FPV Combo' , des:'The DJI FPV Combo racing drone places an emphasis on high-speed first-person flight over imaging, making it exhilarating to use, but potentially dangerous if handled without care.' , img:'https://i.pcmag.com/imagery/reviews/07gnQJfNgoFDmunaeX9cgJB-1.1614370901.fit_lim.size_238x139.jpg' , price: '$1299'},
    {name:'Parrot Anafi' , des:'The Parrot Anafi puts all emphasis on size—the small, folding drone is ideal for travel, thanks to 4K video capture, a small airframe, and USB charging.' , img:'https://i.pcmag.com/imagery/reviews/03PFj9d5ZpcOZmd7fYjYJ0o-16.1569481934.fit_lim.size_238x139.jpg' , price: '$449'},
    {name:'Autel Robotics EVO II Pro' , des:'The Autel EVO II Pro is a folding drone with a stable 6K camera and a remote with a built-in display, so you dont have to use a smartphone to fly it.' , img:'https://i.pcmag.com/imagery/reviews/00x599xV1C4y6W9mmaZcYNC-1.1618610194.fit_lim.size_238x139.jpg' , price: '$1783'},
    {name:'Skydio 2' , des:'The Skydio 2 is a high-priced drone with exceptional obstacle avoidance and follow abilities, but is held back by so-so video and short flight times.' , img:'https://i.pcmag.com/imagery/reviews/01H2wvVWSOxc9QOnUVYSW1q-8.1628188074.fit_lim.size_238x139.jpg' , price: '$1349'},
    {name:'DJI Inspire 2' , des:'If money is no object, the DJI Inspire 2 is the best drone you can buy, delivering Raw video capture at 5.2K quality, superb build quality, and top-end performance.' , img:'https://i.pcmag.com/imagery/reviews/04MmgOnND0brMPrDKGBvBXC-14.1569474379.fit_lim.size_238x139.jpg' , price: '$3190'},
    {name:'Ryze Tello' , des:'The Ryze Tello is a toy quadcopter flyable via smartphone or laptop (using Scratch). Its video quality isnt anything to write home about, but its a fun tech toy and learning tool.' , img:'https://i.pcmag.com/imagery/reviews/02uLqIJJdSWNNArdh0nwQoJ-6.1569482670.fit_lim.size_238x139.jpg' , price: '$99'}
  ]
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='alldrones' element={<AllDrons/>}/>
        <Route path='alldrones/:id' element={<DroneOrder/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='pay' element={<Pay />}/>
        <Route path='myorder' element={<MyOrder />}/>
        <Route path='review' element={<Review />}/>
        <Route path='manageallorders' element={<ManageAllOrder />}/>
        <Route path='adddrone' element={<AddDrone />}/>
        <Route path='makeadmin' element={<MakeAdmin />}/>
        <Route path='managedrone' element={<ManageDrone />}/>
       </Routes>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
