type NavItem = {
    label : string,
    id : string,
    link? : string,
}

const AppNavLinks : NavItem[] = [
    { label: 'ABOUT', id: 'about-section' },
    { label: 'ACHIEVEMENTS', id: 'achievement-section' },
    { label: 'MEMBER', id: 'member-section' },
]

const AppFooterLinks : NavItem[] = [
    { label : 'Home', id : 'hero-section' },
    { label : 'About', id : 'about-section' },
    { label : 'Members', id : 'member-section' }
]

const MemberNavLinks : NavItem[] = [
    { label : 'HOME', id : '', link : '/' },
    { label : 'BIOGRAPHY', id : 'biography-section' },
    { label : 'MEDIA', id : 'media-section' }
]

const MemberFooterLinks : NavItem[] = [
    { label : 'Biography', id : 'biography-section' },
    { label : 'Profile', id : 'profile-section' },
    { label : 'Media', id : 'media-section' }
]

export { AppNavLinks, AppFooterLinks, MemberNavLinks, MemberFooterLinks }