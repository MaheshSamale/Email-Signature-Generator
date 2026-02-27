import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template8(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:Helvetica, sans-serif;font-size:14px;color:#333;text-align:center;">
  <tr>
    <td style="padding-bottom:15px;border-bottom:3px dotted #0F172A;">
      ${data.photo ? `<img src="${data.photo}" width="80" style="border-radius:50%;display:block;margin:0 auto 10px;"/>` : ""}
      <div style="font-size:18px;font-weight:bold;color:#0F172A;">${data.name}</div>
      <div style="font-size:14px;">${data.title} ${data.company ? `<strong style="color:#0F172A">@ ${data.company}</strong>` : ''}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-top:10px;">
      ${data.email ? `<div style="margin-bottom:4px;"><a href="mailto:${data.email}" style="color:#0F172A;text-decoration:none;font-weight:bold;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#0F172A">${icon(phoneSVG, 'tel:'+data.phone, '#0F172A')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#0F172A">${icon(internetSVG, data.website, '#0F172A')}</span> <a href="${data.website}" style="color:#0F172A;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#0F172A">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#0F172A')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#0F172A') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
