import React, { useCallback, useContext, useEffect, useState } from 'react'
import './../Components/AddBox.css'
import '../Components/List.css'
import { userInfo } from '../App.js'


export default function AddBox() {

  const context = useContext(userInfo)

  const date = new Date()

  // const initialBoxData = {
  //     boxName : '',
  //     address : '',
  //     latitude  : '',
  //     longitude : ''
  // }

  const initialTime = {
          from : date.getHours() + ":" + date.getMinutes(),
          to : date.getHours()+1 + ":" + date.getMinutes()
  }

  const days = [
    {
        id : 0,
        day : 'S',
        dayName : 'SUNDAY',
        time : [{
          from : date.getHours() + ":" + date.getMinutes(),
          to : date.getHours()+1 + ":" + date.getMinutes()
          },
        ]
      },
      {
        id : 1,
        day : 'M',
        dayName : 'MONDAY',
        time : [{
          from : date.getHours() + ":" + date.getMinutes(),
          to : date.getHours()+1 + ":" + date.getMinutes()
          },]
      },
      {
        id : 2,
        day : 'T',
        dayName : 'TUESDAY',
        time : [{
          from : date.getHours() + ":" + date.getMinutes(),
          to : date.getHours()+1 + ":" + date.getMinutes()
          },]
      },
      {
        id : 3,
        day : 'W',
        dayName : 'WEDNESDAY',
        time : [{
          from : date.getHours() + ":" + date.getMinutes(),
          to : date.getHours()+1 + ":" + date.getMinutes()
          },]
    },
    {
      id : 4,
      day : 'TH',
      dayName : 'THURSDAY',
      time : [{
        from : date.getHours() + ":" + date.getMinutes(),
        to : date.getHours()+1 + ":" + date.getMinutes()
        },]
    },
    {
      id : 5,
      day : 'F',
      dayName : 'FRIDAY',
      time : [{
        from : date.getHours() + ":" + date.getMinutes(),
        to : date.getHours()+1 + ":" + date.getMinutes()
        },]
    },
    {
      id : 6,
      day : 'S',
      dayName : 'SATURDAY',
      time : [{
        from : date.getHours() + ":" + date.getMinutes(),
        to : date.getHours()+1 + ":" + date.getMinutes()
        },]
    },
  ]

  const [sports,setSports] = useState([])
  const [location,setLocation] = useState(null)
  const [box,setBox] = useState(days)
  
  // const [time, setTime] = useState(new Date())
  // const [data,setData] = useState(initialBoxData)
  const [currentDay,setCurrentDay] = useState(days[0])
  const [boxName,setBoxName] = useState(null)
  const [boxAddress,setBoxAddress] = useState(null)
  const [pincode,setPincode] = useState(0)

  // const changeTime = useCallback((value) => { setTime(value) }, [time])
  // const changeData = useCallback((value)=>{setData(value)},[data])
  const chnagePincode = useCallback((value,id)=>{
      if(value.length<=6)
      {
        setPincode(value)
        document.getElementById(id).classList.remove('errorData')
      }else{
          setPincode(value)
          document.getElementById(id).classList.add('errorData')
      }
    },[setPincode])
  const chnageCurrentDay = useCallback((value)=>{setCurrentDay(value)},[setCurrentDay])
  const changeLocation = useCallback((value)=>{setLocation(value)},[setLocation])
  const changeSports = useCallback((value)=>{setSports(value)},[setSports])
  const chageBoxName = useCallback((value)=>{setBoxName(value)},[setBoxName])
  const changeBoxAddress = useCallback((value)=>{setBoxAddress(value)},[setBoxAddress])

  function checkLocation()
  {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( 
        (success)=>{
          changeLocation(success.coords)
          console.log(success.coords)
        },
        (error)=>{
            if(error.PERMISSION_DENIED)
              {
                console.log('Turn On Location')
                // checkLocation()
              }
          console.log(error.PERMISSION_DENIED)
        })
      
    } else {
      console.error("Geolocation is not supported.");
    }

  }

  async function saveBox()
  {
      const {latitude,longitude} = location
      console.log(pincode.length)
      if(boxName!=null && boxAddress!=null && sports.length!==0 && pincode.length === 6)
      {
        const response  = await fetch('/addBox',{
          headers : {
            "Content-Type" : 'application/json'
          },
          body : JSON.stringify({box,sports,longitude,latitude,boxName,pincode,boxAddress,status : 'PENDING',email : context.userData.email}),
          method : 'POST'
        })
        if(response.status === 308)
          console.log(await response.json())
        else if(response.status === 208)
            console.log(await response.json())
            // const data = await response.json()
      }
      else{
          console.error('Enter data')
      }
  }

  useEffect(()=>{
      checkLocation()
  },[])

  function updateTime(e,id)
  {
      // id  = time id
      const name = e.target.name
      const value = e.target.value

      const updatedBox = [...box]

      // updatedBox[currentDay.id] = {
      //     ...updatedBox[currentDay.id],
      //     time : [...updatedBox[currentDay.id].time,{[updatedBox[currentDay.id].time[id].name]:value}]
      // }

      console.log(name)
      // {box[currentDay.id].time[id].name = value}

      updatedBox[currentDay.id].time[id] = {...updatedBox[currentDay.id].time[id],[name]:value}

      console.log(updatedBox[currentDay.id].time)

      setBox(updatedBox)
      console.log(box)

      // setBox(updatedBox)
  }

  function updateSport(id)
  {
      const doc = document.getElementById(id)
      const updatedSports = sports
      if(doc.classList.contains('imgBorderAddBox'))
      {
        doc.classList.remove('imgBorderAddBox')
        updatedSports.splice(updatedSports.indexOf(id),1)
      }
      else{
        doc.classList.add('imgBorderAddBox')
        updatedSports.push(id)
      }
      changeSports(updatedSports)

      console.log(updatedSports)
  }

  
  return (
    <div className='mainContainer'>
      {/* <h1>Hello</h1> */}
        {/* <TimePicker use12Hours={true} seperator={true} ></TimePicker> */}

      <div className="container" style={{ width: '100%', padding: '5%', marginLeft: '7%', marginRight: '7%' }}>
        <div style={{ width: '45%',margin : '5%' }}>
          <div className="wrapper" style={{margin : '2%'}} >

            <input class="form-control textAddBox"  type="text" placeholder="Box Name"
              onChange={(e)=>{chageBoxName(e.target.value)}}
            ></input>

            <textarea class="form-control textAddBox" placeholder='Address'
              onChange={(e)=>{changeBoxAddress(e.target.value)}} 
            id="exampleFormControlTextarea1" rows="3"></textarea>
            <input class="form-control textAddBox" id='pincode'  type="number" placeholder="PinCode"
              onChange={(e)=>{chnagePincode(e.target.value,e.target.id)}}
            ></input>

            {location==null?<button className="btn fill" onClick={()=>{checkLocation()}}>Add Location</button>:
                <div>
                  <p>{location.longitude}</p>
                  <p>{location.latitude}</p>
                </div>
            }
            <div style={{display : 'flex',justifyContent : 'space-between'}}>
                <img id='cricket' className='imgAddBox ' src={require('../images/icons8-cricket-48.png')} alt="Cricket" onClick={(e)=>{updateSport(e.target.id)}}/>
                <img id='football' className='imgAddBox' src={require('../images/icons8-football-48.png')} alt="Football" onClick={(e)=>{updateSport(e.target.id)}}/>
                <img id='badminton' className='imgAddBox' src={require('../images/icons8-badminton-48 (1).png')} alt="Badminton" onClick={(e)=>{updateSport(e.target.id)}}/>
                <img id='vollyball' className='imgAddBox' src={require('../images/icons8-volleyball-48.png')} alt="Volleyball" onClick={(e)=>{updateSport(e.target.id)}}/>
            </div>
            <div style={{marginTop : '2rem'}}>
              <button className="btn fill"
                  onClick={()=>{
                      saveBox()                    
                  }}
              >Save Box</button>
            </div>  
          </div>

        </div>
        <div style={{justifyContent : 'center',alignContent : 'center',width : '40%'}}>
          <div style={{flexDirection : 'row',display :'flex',justifyContent : 'space-around'}}>
              {box.map((item)=>{
                  return(

                    <div >
                      <h5 className='day'
                        onClick={()=>{
                          // console.log(item);
                          chnageCurrentDay(item)}}
                      >{item.day}</h5>
                      {
                          // item.time.map((item)=>{item.})
                      }
                    </div>


                  )
              }) }
          </div>

          <table>
              <div>
                <tr>
                  <td>
                    {box[currentDay.id].dayName}
                  </td>
                </tr>
                {
                    box[currentDay.id].time.map((item,index)=>{
                      return(
                          <tr>
                              <td>
                                  <div style={{borderRadius : '0.4rem',marginTop : '0.5rem'}}>
                                    FROM : 
                                    <input value={item.from} name='from' className='time' type='time' onChange={(e)=>{updateTime(e,index)}}></input>
                                    TO : 
                                    <input value={item.to} name='to' className='time' type='time' onChange={(e)=>{updateTime(e,index)}}></input>
                                  </div>
                              </td>
                          </tr>
                      )
                    })
                }
              </div>
          </table> 

          <div className="button-wrapper" >
            {/* <button className="btn outline">DETAILS</button> */}
            <button className="btn fill"
              onClick={()=>{
                  console.log(currentDay)

                  const updatedBox = [...box]
                  updatedBox[currentDay.id] = {...updatedBox[currentDay.id],time : [...updatedBox[currentDay.id].time,initialTime]}
                  
                  setBox(updatedBox)
                  // console.log(box);
              }}
            >Add</button>
            <button className="btn fill"
              onClick={()=>{
                  console.log(currentDay)

                  const updatedBox = [...box]


                  updatedBox[currentDay.id].time.pop()

                  // updatedBox[currentDay.id] = {...updatedBox[currentDay.id],time : [...updatedBox[currentDay.id].time,initialTime]}
                  
                  setBox(updatedBox)
                  // console.log(box);
              }}
            >Remove</button>

          </div>
        </div>
      </div>

    </div>
  )
}