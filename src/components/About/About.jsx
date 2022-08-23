import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Serviços</h2>
                <p className='text-3xl py-6 text-gray-500'>Encontre a Solução para o seu problema.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl w-22 h-80  ' >
                    <p className='text-5xl font-bold text-indigo-600 pb-8'>ERP Protheus</p>
                    <p className='text-gray-400 mt-2'>Desenvolvimento ADVPL</p>
                    <p className='text-gray-400 mt-2'>Suporte a Usuários</p>
                    <p className='text-gray-400 mt-2'>Treinamento de Usuarios</p>
                    <p className='text-gray-400 mt-2'>Integrações com outros sistemas</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl w-22 h-80  ' >
                    <p className='text-5xl font-bold text-indigo-600 pb-8'>API</p>
                    <p className='text-gray-400 mt-2'>Crie serviços para o seu sistema</p>
                    <p className='text-gray-400 mt-2'>Integrações com Supabase</p>
                    <p className='text-gray-400 mt-2'>Integrações Firebase</p>
                    <p className='text-gray-400 mt-2'>Serviços de Autenticação</p>
                    <p className='text-gray-400 mt-2'>JWT</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl w-22 h-80  ' >
                    <p className='text-5xl font-bold text-indigo-600 pb-8'>Criação de Sites</p>
                    <p className='text-gray-400 mt-2'>Sites Responsivos</p>
                    <p className='text-gray-400 mt-2'>Criação de ID Visual</p>
                    <p className='text-gray-400 mt-2'>Excelente Performance</p>
                    <p className='text-gray-400 mt-2'>Excelente Custo Beneficio</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About