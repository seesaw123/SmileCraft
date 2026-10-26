import {notFound} from 'next/navigation';
import {Site} from '@/components/Site';
import type {PageName} from '@/components/Site';
export function generateStaticParams(){return ['treatments','clinic','contact','booking'].map(page=>({page}));}
export default async function Section({params}:{params:Promise<{page:string}>}){const {page}=await params;if(!['treatments','clinic','contact','booking'].includes(page))notFound();return <Site page={page as PageName}/>}
