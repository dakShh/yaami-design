import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Brush, Home, MessageCircle } from 'lucide-react'
import React from 'react'
export default function Component() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <header className='bg-primary text-primary-foreground py-6'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold'>Elara Designs</h1>
          <p className='mt-2'>Transforming Spaces, Enriching Lives</p>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <section className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-2xl font-semibold mb-4'>About Elara Johnson</h2>
            <p className='mb-4'>
              {
                'With over a decade of experience in interior design, Ive had the privilege of transforming countless spaces into beautiful, functional homes. My passion for design started early, and Ive honed my skills through years of study and hands-on experience.'
              }
            </p>
            <p className='mb-4'>
              At Elara Designs, I believe that every space has the potential to be extraordinary. My
              approach combines creativity with practicality, ensuring that each design not only looks
              stunning but also enhances the way you live.
            </p>
            <Button>Book a Consultation</Button>
          </div>
          <div className='mt-6 md:mt-0'>
            <img
              src='/placeholder.svg?height=400&width=400'
              alt='Elara Johnson, Interior Designer'
              className='rounded-full w-64 h-64 object-cover mx-auto'
            />
          </div>
        </section>

        <section className='mt-12'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Why Choose Elara Designs?</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card>
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <Brush className='h-12 w-12 text-primary mb-4' />
                <h3 className='font-semibold mb-2'>Personalized Approach</h3>
                <p className='text-sm'>Every design is tailored to your unique style and needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <Award className='h-12 w-12 text-primary mb-4' />
                <h3 className='font-semibold mb-2'>Award-Winning Designs</h3>
                <p className='text-sm'>Recognized for innovative and beautiful interiors.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <Home className='h-12 w-12 text-primary mb-4' />
                <h3 className='font-semibold mb-2'>Holistic Approach</h3>
                <p className='text-sm'>Considering every aspect of your space for a cohesive look.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6 flex flex-col items-center text-center'>
                <MessageCircle className='h-12 w-12 text-primary mb-4' />
                <h3 className='font-semibold mb-2'>Clear Communication</h3>
                <p className='text-sm'>Keeping you informed and involved throughout the process.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='mt-12 text-center'>
          <h2 className='text-2xl font-semibold mb-4'>Ready to Transform Your Space?</h2>
          <p className='mb-6'>
            {` Let's create a home that reflects your personality and meets your needs.`}
          </p>
          <Button size='lg'>Contact Elara</Button>
        </section>
      </main>

      <footer className='bg-muted mt-12 py-6'>
        <div className='container mx-auto px-4 text-center text-muted-foreground'>
          <p>&copy; 2023 Elara Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
