import avatar from '../pictures/avatar.jpg'
import AWS_Cloud_Cert from '../pictures/AWS_Cloud_Cert.png'
import AWS_Developer from '../pictures/AWS-Certified_Developer.png'
import '../scss/cloud.scss'



const Resume = () => {

    
   
   return(<> 
            <div className="cloud">
            <table className="d-flex flex-column">
                <tr>
                <td><img src={avatar} height="75px" className="rounded-circle p-2 m-2" alt="Randy" /><td className='fw-bolder'>Randall Taylor</td></td>
                <td>rhtaylorgithub@gmail.com</td>
                </tr>
                <tr>
                <td>Software Engineer, Web Developer, Cloud Developer
                    </td>
                <td>602-999-7756</td>    
                </tr>
                <tr>
                    <td>
                        HTML, Web Hosting, Web Design, Web Applications, UI/UX, CSS, SEO, JavaScrip, Mobile Development
                    </td>
                </tr>
                <tr>
                    <td className="fw-bolder">
                        Experience
                    </td>
                </tr>
                <td>
                    RevolentGroup
                </td>
                <td className='fw-bolder'>
                    AWS Cloud Developer
                </td>
                <tr>
                <td>
                   •   sFTP python script for Docker image to use Checksum and AWS IAM role for better security. -Effectual
                </td>
                </tr>
                <tr>
                    <td>
                    •	Deployed AWS ECS Image from Terraform AWS CodePipeline, CodeBuild, CodeDeploy. -Titanium
                    </td>
                </tr>
                <tr>
                    <td>
                    •	Bash Scripted software installation/reboot scripts on new servers automation. -University of Phoenix
                    </td>
                </tr>
                <tr>
                    <td>
                    •	Built loading Skeleton Screen for React-Native Application for enhanced UI. -Jetson Scooters 
                    </td>
                </tr>
                <tr>
                    Steady Install, LLC
                <td className='fw-bolder'>Full Stack Web Developer</td></tr>
                <tr>
                    <td>
                    •	Create User Profiles for Foremen of the Application.
                    </td>
                </tr>
                <tr>
                    <td>
                    •	Designed and Built Video Chat feature for the App.
                    </td>
                </tr>
                <tr>
                    <td>
                    •	Upgraded Server to use 50% less memory.
                    </td>
                </tr>
                <tr>
                    Pet Safe Kennels, LLC
                    <td className='fw-bolder'>WebMaster, Web Developer</td>
                </tr>
                <tr>
                    <td>
                    •	Built react app website with mobile first design philosophy to give website higher SEO ranking.
                    </td>
                </tr>
                <tr>
                    <td>
                    •	Maintain online presence with SEO best practices with AWS CDN.
                    </td>
                </tr>
                <tr className="fw-bolder">Certifications</tr>
                <tr className="d-flex justify-content-center"><td className="mx-auto"><img key="cloud_cert" className="rounded-circle" src={AWS_Cloud_Cert} height="200px" width="200px" /></td>
                    <td className="mx-auto"><img key="developer_cert" className="rouded-circle" src={AWS_Developer} height="200px" width="200px" /></td>
                </tr>
            </table>
            

            </div>
           </>)

}

export default Resume