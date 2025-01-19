import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Geomatics Engineer</p>
          </div>
          <div>
            <p> I hold a Bachelor of Engineering in Geomatics Engineering from Kathmandu University, where I developed a solid foundation in geospatial principles including surveying tools, mapping techniques, Geographic Information Systems (GIS), geospatial programming, Remote Sensing and WebGIS mapping. Building on this academic groundwork, I am currently employed as a Geospatial Application Developer at an intergovernmental organization in Nepal. In this role, I have been responsible for applying data processing and advanced spatial analysis using Google Earth Engine and R programming; creating digital platforms for geovisualization, specializing in Python; and managing spatial databases.
            <br></br>

              I am passionate about geospatial technologies and specialize in creating webgis application softwares. I am exceling myself more in this field and would be happy to serve you.
              What would you do if you had a webgis expert available at your fingertips? 😁</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
