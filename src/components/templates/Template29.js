import { icon, socialIcons, internetSVG, phoneSVG, locationSVG } from "./icons";

export default function Template29(data) {
  return `

<table cellpadding="0" cellspacing="0" style="font-family:"Courier New", Courier, monospace;font-size:14px;color:#333;text-align:center;">
  <tr>
    <td style="padding-bottom:15px;border-bottom:3px dotted #64748B;">
      ${data.photo ? `<img src="${data.photo}" width="80" style="border-radius:8px;display:block;margin:0 auto 10px;"/>` : ""}
      <div style="font-size:18px;font-weight:bold;color:#64748B;">${data.name}</div>
      <div style="font-size:14px;">${data.title} ${data.company ? `<strong style="color:#64748B">@ ${data.company}</strong>` : ''}</div>
    </td>
  </tr>
  <tr>
    <td style="padding-top:10px;">
      ${data.email ? `<div style="margin-bottom:4px;"><a href="mailto:${data.email}" style="color:#64748B;text-decoration:none;font-weight:bold;">${data.email}</a></div>` : ''}
      <div style="font-size:12px;margin-bottom:8px;">
        
    ${data.phone ? `<span style="color:#64748B">${icon(phoneSVG, 'tel:'+data.phone, '#64748B')}</span> ${data.phone}<br/>` : ''}
    ${data.website ? `<span style="color:#64748B">${icon(internetSVG, data.website, '#64748B')}</span> <a href="${data.website}" style="color:#64748B;text-decoration:none;">${data.website}</a><br/>` : ''}
    ${data.address ? `<span style="color:#64748B">${icon(locationSVG, 'https://maps.google.com/?q='+data.address, '#64748B')}</span> ${data.address}<br/>` : ''}
  
      </div>
      <div>
        
    ${data.socials && data.socials.length > 0 ? 
      data.socials.map(s => s.url && socialIcons[s.platform] ? icon(socialIcons[s.platform], s.url, '#64748B') : '').join('') 
    : ''}
  
      </div>
    </td>
  </tr>
</table>`;
}
