import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1200px] m-auto h-[1400px] md:h-[600px] bg-blue-100/60'>
     
       <h1 className='font-bold text-blue-500 text-3xl pb-10 text-center pt-10'>Types of Hernia</h1>
       <div className='md:flex gap-10'>
        <div className='w-[300px] border rounded-xl shadow-xl  shadow-cyan-500/50 m-auto h-[380px] p-5 my-10 bg-white'>
            <h1 className='font-bold text-2xl text-blue-500 py-10  '>Hiatal</h1>
            <p>A   hiatal hernia occurs when the upper part
of the stomach pushes through an
opening in the diaphragm and into the
chest cavity. The diaphragm is the thin
muscle wall that separates the chest cavity
from the abdomen. The opening in the
diaphragm is where the esophagus and
stomach join.</p>
        </div>
        <div className='w-[300px] border rounded-xl shadow-xl  shadow-cyan-500/50 m-auto h-[380px] p-5 my-10 bg-white'>
            <h1 className='font-bold text-2xl text-blue-500 py-10  '>Umbilical </h1>
            <p>An umbilical hernia occurs when part of
the bowel or fatty tissue pushes through a
weak spot in the abdominal wall, near the
navel. Often, it is not serious, but a person
should see a doctor if it causes pain and
swelling or does not disappear under light
pressure.</p>
        </div>
        <div className='w-[300px] border rounded-xl shadow-xl  shadow-cyan-500/50 m-auto h-[380px] p-5 my-10 bg-white'>
            <h1 className='font-bold text-2xl text-blue-500 py-10  '>Ventral</h1>
            <p>A hernia occurs when there is a hole in the
muscles of the abdominal wall, allowing a
loop of intestine or abdominal tissue to
push through the muscle layer. A ventral
hernia is a hernia that occurs at any
location along the midline (vertical center)
of the abdomen wall. There are three types
of ventral hernia:</p>
        </div>
        </div>
    </div>
  )
}

export default Card