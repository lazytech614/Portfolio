import React from 'react';
import { resumeFeatures } from '../../constants/resumefeatures';

const ResumeDetails = ({ feat }) => {
  // Find the feature object matching the feat prop
  const feature = resumeFeatures.find(feature => feature.feat === feat);

  // Handle case where feature is not found
  if (!feature) {
    return <p className='text-red-500'>Feature not found</p>;
  }

  // Set grid columns based on the feature.feat value
  const gridColumns = feature.feat === "Skills" 
    ? "grid-cols-4 xl:grid-cols-6" 
    : feature.feat === "Contact" 
    ? "grid-cols-2 md:grid-cols-3" 
    : "grid-cols-2";

  return (
    <div>
      <p className='text-[18px] sm:text-[24px] text-accent-default font-semibold mb-2'>
        My {feature.feat}
      </p>
      <p className='text-[12px] sm:text-[14px]'>{feature?.description}</p>
      
      <div className={`grid ${gridColumns} gap-4 mt-10`}>
        {feature.details?.map(detail => (
          <div key={detail.id} className='bg-[#27272c] rounded-md p-2 sm:p-6 text-[12px] sm:text-[14px]'>
            <p className='text-accent-default mb-2'>{detail?.type}</p>
            <p>{detail?.name}</p>

            <div className='flex items-center gap-2'>
              {detail?.branch || detail?.link ? (
                <>
                  <div className='w-[6px] h-[6px] bg-accent-default rounded-[100%]'></div>
                  {detail?.branch}
                  {detail?.link && (
                    <a
                      href={detail.link}
                      className='hover:text-accent-default hover:underline duration-200 text-[12px] sm:text-[14px]'>
                      {detail.linkName}
                    </a>
                  )}
                </>
              ) : null}
            </div>

            {detail?.image && (
              <img className='w-[60px]' src={detail.image} alt='' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeDetails;
