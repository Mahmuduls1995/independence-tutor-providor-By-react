import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 class="bg-gradient text-center text-info my-4">Question and Answer</h2>
            <div class="container mx-auto my-4">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Question: Difference between authorization and authentication ?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Authentication:</strong>Authentication is a process of defining that user is correct owner of any account. Which tries to identify the user before accessing the application.
                                <li>Authentication confirms your identity to grant access to the system.
                                </li>
                                <li>It is the process of validating user credentials to gain user access.
                                </li>
                                <li>It determines whether user is what he claims to be
                                </li>
                                <li>Authentication usually requires a username and a password.
                                </li>
                                <li>Authentication is the first step of authorization so always comes first.
                                </li>
                                <li>For example, students of a particular university are required to authenticate themselves before accessing the student link of the university’s official website. This is called authentication.</li>
                                <br />

                                <strong> Authorization :</strong>Authorization is the process of verifying what they have access to.
                                If they do not have access, they will not be allowed to take that action. Keep in mind that this can be an authenticated user.
                                <li>Authorization determines whether you are authorized to access the resources.</li>
                                <li>It is the process of verifying whether access is allowed or not.</li>
                                <li>It determines what user can and cannot access.</li>
                                <li>Authentication factors required for authorization may vary, depending on the security level</li>
                                <li>Authorization is done after successful authentication.</li>
                                <li>For example, authorization determines exactly what information the students are authorized to access on the university website after successful authentication.</li>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question:  Why are you using firebase? What other options do you have to implement authentication ?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. </strong> It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.

                                Firebase can be used when I do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my apps in production. You will not have to take care of servers, etc, Google will take care of it for me.

                                <strong>User authentication is a powerful way to provide rightful access to your digital properties like your website or application. And it obviously adds to the security and a customized user experience.</strong>I can implement authentication by third party platform of Okta. Okta is a service used for identity management by using okta we can access any employer to any application on any device.I can also enable multi-factor authentication (MFA). Moreover, one can set up Okta’s cloud authentication and let the users sign in via biometrics or push notifications.

                                Besides, you get a real-time Syslog with advanced searches to identify issues for instant troubleshooting.

                                Okta gives importance to progressive profiling, which means minimum upfront information at registrations. The aim is to minimize user inconvenience, boost registrations, and gradually complete the user profile.

                                Okta allows for excellent API security by integrating identity protocols like OAuth. And you will have a single point for all API authorization policies to integrate security and development.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;