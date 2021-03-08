using CPAS.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CPAS.Data.Repositories.Generic
{
    public abstract class GenericRepository<T> : IRepository<T> where T : class
    {
        private readonly CarparkDbContext _context;

        protected GenericRepository(CarparkDbContext dbContext)
        {
            _context = dbContext;
        }

        public T Add(T entity)
        {
            var result = _context.Set<T>().Add(entity);
            return result.Entity;
        }

        public void BulkDelete(ICollection<T> items)
        {
            throw new NotImplementedException();
        }

        public void BulkInsert(ICollection<T> items)
        {
            throw new NotImplementedException();
        }

        public void BulkUpdate(ICollection<T> items)
        {
            throw new NotImplementedException();
        }

        public async Task<int> SaveChangeAsync()
        {
            var result = await _context.SaveChangesAsync();
            return result;
        }

        public void Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public async Task<ICollection<T>> FindByAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _context.Set<T>().Where(predicate).AsQueryable().AsNoTracking();
            return await query.ToListAsync();
        }

        public async Task<ICollection<T>> GetAllAsync()
        {
            var query = _context.Set<T>().AsQueryable<T>().AsNoTracking();
            return await query.ToListAsync();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _context.Set<T>().AsQueryable<T>().AsNoTracking();
            return await Task.FromResult(query.Where(predicate).FirstOrDefault());
        }

        public void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
